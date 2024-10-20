"use client";
import React, {
    createContext,
    ReactNode,
    SetStateAction,
    useState,
} from "react";
import { ConfigProvider, message, theme, } from "antd";

import enUS from 'antd/locale/en_US';
import ar_EG from 'antd/locale/ar_EG';
import { RcFile } from "antd/es/upload";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import MainLayout from "@/components/layouts/MainLayout";

type ToastFunction = (msg: string) => void;
export interface IParties {
    kay?: number,
    name?: string,
    idType?: string,
    idNumber?: string,
    partyType?: string,
    nationality?: string,
    gender?: string,
    email?: string,
    phonenumber?: string,
    workplace?: string,
    submitterType?: string,
    note?: string,
    wakala?: string
}


export interface IInformarmation {
    language?: string,
    notaryName?: string,
    transactionType?: string,
    transactionTerms?: Array<string>,
    transactionterm?: Array<string>,
    transactionTermRules?: Array<string>,
    attechedFile?: Array<any>,
    submitterType?: string,
    idType?: string,
    idNumber?: string,
    name?: string,
    nationality?: string,
    gender?: string,
    phonenumber?: string,
    email?: string,
    workplace?: string,
    note?: string,
    parties: Array<IParties>,
    additionalNote?: string,
    wakala?: string,
    submitterAsParties?: boolean,
}


interface CommonContextType {
    Toast: {
        error: ToastFunction;
        success: ToastFunction;
        warning: ToastFunction;
    };
    isDarkMode: boolean,

}
export const PublicGlobalContext = createContext({} as CommonContextType);
type PublicGlobleContextProviderProps = {
    children: ReactNode;
};

const { defaultAlgorithm, darkAlgorithm } = theme;

const GlobalProvider = (props: PublicGlobleContextProviderProps) => {

    const [isDarkMode, setIsDarkMode] = useState(true);

    const [messageApi, contextHolder] = message.useMessage();

    const success = (message: string) => {
        messageApi.open({
            type: "success",
            content: message,
        });
    };

    const error = (message: string) => {
        messageApi.open({
            type: "error",
            content: message
        });
        setTimeout(messageApi.destroy, 1000);
    };

    const warning = (message: string) => {
        messageApi.open({
            type: "warning",
            content: message,
        });
    };

    const Toast = {
        success,
        warning,
        error,
    };

    return (
        <PublicGlobalContext.Provider
            value={{
                ...props,
                 Toast,
                isDarkMode,
            }}>
            <ConfigProvider
                // direction={props.local == "ar" ? 'rtl' : 'ltr'}
                // locale={props.local == "ar" ? ar_EG : enUS}

                theme={{
                    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
                    token: {
                        // colorPrimary: props.colorPrimary,
                        // fontSize: 12
                    },
                    components: {
                        Timeline: {
                            tailColor: "yellow"
                          }
                    },
                }}
            >
                <ProgressBar
                    height="2px"
                    // color={props.colorPrimary}
                    options={{ showSpinner: false }}
                    shallowRouting
                />
                <MainLayout>

                {props.children}
                </MainLayout>
                {contextHolder}
            </ConfigProvider>
        </PublicGlobalContext.Provider>
    );
}

export default GlobalProvider;