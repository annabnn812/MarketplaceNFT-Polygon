# Basic Sample Hardhat Project
npm install ethers hardhat @nomiclabs/hardhat-waffle \
ethereum-waffle chai @nomiclabs/hardhat-ethers \
web3modal @openzeppelin/contracts ipfs-http-client \
axios

npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

npx tailwindcss init -p

P.S. : Если Hardhat  не запускается , то инсталировать дополнительно 
npm install --save-dev "@nomiclabs/hardhat-ethers@^2.0.0" "ethereum-waffle@^3.2.0"
*************************
создать файлы :
 .secret ;
 NFT.sol ;
 NFTMarket.sol ;
 .infuraid ;
 ******************
 Запустить в CL:
 ******************
npx hardhat

npx hardhat test

npm run dev

*****************
 в другом терминале : 
 *****************
 npx hardhat compile  (перед компиляцией Delete artifacts folder)

 npx hardhat run scripts/deploy.js --network localhost

 npx hardhat run scripts/deploy.js --network mumbai

*****************
 в другом терминале : 
 *****************

npx hardhat node
