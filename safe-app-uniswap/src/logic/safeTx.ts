import SafeAppsSDK from '@gnosis.pm/safe-apps-sdk';

const delay = (ms: number) => new Promise( resolve => setTimeout(resolve, ms))

export const waitForSafeTx = async(sdk: SafeAppsSDK, safeTxHash: string) => {
    while (true) {
        const safeTx = await sdk.txs.getBySafeTxHash(safeTxHash)
        console.log({safeTx})
        if (safeTx.isExecuted) return
        await delay(5000)
    }
}