## Decentralized chat app on ethereum with web3 and react truffle box
Start local ethereum blockchain:
```
node_modules/.bin/ganache-cli
```
Compile and deploy smart contracts:
```
node_modules/.bin/truffle console --network develop
compile
migrate
```
Start the frontend:
```
cd client
npm i
npm run start
```


instance = await Chat.deployed()
instance.sendAMessage('address', 'abc')

.then((f) => console.log(f))
instance.getChatHistory('address')

instance.sendAMessage('0x42e718E5aF367c46424305132abDd4f962E17670', 'abc')
instance.sendAMessage('0xD232204f2b0b39a9CdA24e25fd2f372dc4cD3F29', 'abcwww')
instance.getChatHistory('0x42e718E5aF367c46424305132abDd4f962E17670')
instance.getChatHistory('0xD232204f2b0b39a9CdA24e25fd2f372dc4cD3F29')


instance.setTest('wwwww')
instance.getTest()