import React, { useEffect, useRef } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  FxBottomSheetModalMethods,
  FxArrowUpIcon,
  useFxTheme,
} from '@functionland/component-library';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BloxScreen } from '../screens/Blox/Blox.screen';
import { HubScreen } from '../screens/Hub.screen';
import { DevicesScreen } from '../screens/Devices.screen';
import { UsersScreen } from '../screens/Users/Users.screen';
import {
  BloxIcon,
  UserIcon,
  // HubIcon,
  DevicesIcon,
  SettingsIcon,
} from '../components';
import {
  Routes,
  MainTabsParamList,
  SettingsStackParamList,
} from './navigationConfig';
import {
  SettingsScreen,
  AboutScreen,
  PoolsScreen,
  ModeScreen,
  ConnectedDAppsScreen,
} from '../screens/Settings';
import { ComponentGalleryNavigator } from './ComponentGallery.navigator';
import { GlobalBottomSheet } from '../components/GlobalBottomSheet';
import { Helper } from '../utils';
import { useUserProfileStore } from '../stores/useUserProfileStore';
import { useLogger } from '../hooks';
import { useBloxsStore } from '../stores';
import shallow from 'zustand/shallow';
import { BluetoothCommandsScreen } from '../screens/Settings/Bluetooth/BluetoothCommands.screen';

export const MainTabsNavigator = () => {
  const theme = useFxTheme();
  const [password, signiture, setFulaIsReady, fulaIsReady] =
    useUserProfileStore(
      (state) => [
        state.password,
        state.signiture,
        state.setFulaIsReady,
        state.fulaIsReady,
      ],
      shallow
    );
  const [bloxs, currentBloxPeerId, updateBloxsStore] = useBloxsStore(
    (state) => [state.bloxs, state.currentBloxPeerId, state.update],
    shallow
  );
  const globalBottomSheetRef = useRef<FxBottomSheetModalMethods>(null);
  const logger = useLogger();

  const openGlobalBottomSheet = () => {
    globalBottomSheetRef.current.present();
  };

  const closeGlobalBottomSheet = () => {
    globalBottomSheetRef.current.close();
  };
  useEffect(() => {
    const bloxsArray = Object.values(bloxs || {});
    if (!currentBloxPeerId && bloxsArray.length) {
      updateBloxsStore({
        currentBloxPeerId: bloxsArray[0].peerId || 'PeerId is empty',
      });
    }
  }, [currentBloxPeerId]);
  useEffect(() => {
    if (password && signiture && currentBloxPeerId) {
      setFulaIsReady(false);
      logger.log('MainTabsNavigator:intiFula', {
        bloxPeerId: currentBloxPeerId,
        password: password ? 'Has password' : undefined,
        signiture: signiture ? 'Has signiture' : undefined,
        bloxs,
      });
      try {
        Helper.initFula({
          password,
          signiture,
          //bloxAddr: '/ip4/192.168.0.167/tcp/40001/p2p/12D3KooWGawPDngmHEfynixQGsg9nQTrRufa2TD8TQkQQsf76PUF',
          bloxPeerId: currentBloxPeerId,
        })
          .then(() => {
            setFulaIsReady(true);
          })
          .catch(() => {
            setFulaIsReady(false);
          });
      } catch (error) {
        logger.logError('MainTabsNavigator:intiFula', error);
      }
    }
  }, [password, signiture, currentBloxPeerId]);
  return (
    <>
      <MainTabs.Navigator
        tabBarPosition="bottom"
        screenOptions={() => ({
          tabBarIndicatorStyle: {
            height: 0,
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.content3,
          tabBarStyle: {
            backgroundColor: theme.colors.backgroundApp,
            borderTopWidth: 1,
            borderTopColor: theme.colors.backgroundSecondary,
            paddingBottom: 4,
          },
          tabBarLabelStyle: {
            ...theme.textVariants.bodyXSRegular,
            textTransform: 'none',
          },
          headerShown: false,
          headerStyle: {
            backgroundColor: theme.colors.backgroundApp,
          },
          headerTitleStyle: {
            color: theme.colors.content1,
          },
        })}
      >
        <MainTabs.Screen
          name={Routes.BloxTab}
          component={BloxScreen}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ color }) => <BloxIcon fill={color} />,
            tabBarLabel: 'Blox',
          }}
        />
        <MainTabs.Screen
          name={Routes.UsersTab}
          component={UsersScreen}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ color }) => <UserIcon fill={color} />,
            tabBarLabel: 'Users',
          }}
        />
        <MainTabs.Screen
          name={Routes.HubTab}
          component={HubScreen}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ color }) => <FxArrowUpIcon fill={color} />,
            tabBarLabel: '',
          }}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault();
              openGlobalBottomSheet();
            },
          })}
        />
        <MainTabs.Screen
          name={Routes.DevicesTab}
          component={DevicesScreen}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ color }) => <DevicesIcon fill={color} />,
            tabBarLabel: 'Devices',
          }}
        />
        <MainTabs.Screen
          name={Routes.SettingsTab}
          component={SettingsNavigator}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ color }) => <SettingsIcon fill={color} />,
            tabBarLabel: 'Settings',
          }}
        />
      </MainTabs.Navigator>
      <GlobalBottomSheet
        ref={globalBottomSheetRef}
        closeBottomSheet={closeGlobalBottomSheet}
      />
    </>
  );
};

const MainTabs = createMaterialTopTabNavigator<MainTabsParamList>();

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();
const SettingsNavigator = () => {
  const theme = useFxTheme();

  return (
    <SettingsStack.Navigator
      screenOptions={() => ({
        headerBackTitleVisible: false,
        headerBackImageSource: require('../../assets/icons/back.png'),
        headerTintColor: theme.colors.content1,
        headerStyle: {
          backgroundColor: theme.colors.backgroundApp,
        },
        headerTitle: '',
      })}
    >
      <SettingsStack.Screen
        name={Routes.Settings}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        name={Routes.ConnectedDApps}
        component={ConnectedDAppsScreen}
      />
      <SettingsStack.Screen name={Routes.Mode} component={ModeScreen} />
      <SettingsStack.Screen name={Routes.Pools} component={PoolsScreen} />
      <SettingsStack.Screen name={Routes.About} component={AboutScreen} />
      <SettingsStack.Screen
        name={Routes.BluetoothCommands}
        component={BluetoothCommandsScreen}
      />

      <SettingsStack.Screen
        options={() => ({
          headerShown: false,
        })}
        name={Routes.ComponentGallery}
        component={ComponentGalleryNavigator}
      />
    </SettingsStack.Navigator>
  );
};
