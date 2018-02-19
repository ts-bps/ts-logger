export declare const getLogger: ({ log }?: {
    log: (message?: any, ...optionalParams: any[]) => void;
}) => {
    info: (message: any) => void;
    success: (message: any) => void;
    error: (message: any) => void;
};
