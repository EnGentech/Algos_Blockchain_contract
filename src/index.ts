import * as algokit from '@algorandfoundation/algokit-utils';

async function main() {
    const algorand = algokit.AlgorandClient.defaultLocalNet()
    const blessvic = algorand.account.random()
    const dispence = algorand.account.dispenser()
    await algorand.send.payment({
        sender: (await dispence).addr,
        receiver: blessvic.addr,
        amount: algokit.algos(42)
    })
    console.log("Account balance:", await algorand.account.getInformation(blessvic.addr))
}

main();