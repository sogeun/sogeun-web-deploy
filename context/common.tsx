import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { DeviceInfoPayload } from "~/constants/types";

interface CommonContextType {
  deviceInfo: DeviceInfoPayload | null;
}

interface CommonActionsType {
  setDeviceInfo: (deviceInfo: DeviceInfoPayload) => void;
  clearDeviceInfo: () => void;
}

const CommonContext = createContext<CommonContextType | null>(null);
const CommonActionsContext = createContext<CommonActionsType | null>(null);

export function useCommonState() {
  const values = useContext(CommonContext) as CommonContextType;
  return values;
}

export function useCommonActions() {
  const actions = useContext(CommonActionsContext) as CommonActionsType;
  return {
    ...actions,
  };
}

export default function CommonProvider({ children }: PropsWithChildren) {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfoPayload | null>(null);
  const state = {
    deviceInfo,
  };
  const actions = useMemo(
    () => ({
      setDeviceInfo,
      clearDeviceInfo() {
        setDeviceInfo(null);
      },
    }),
    []
  );
  return (
    <CommonActionsContext.Provider value={actions}>
      <CommonContext.Provider value={state}>{children}</CommonContext.Provider>
    </CommonActionsContext.Provider>
  );
}
