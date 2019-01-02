import { Injectable } from '@angular/core';
// import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";

import { LocalStorage } from '@ngx-pwa/local-storage';


@Injectable({
  providedIn: 'root'
})

// @Injectable()
export class AssetsService {

  isLoaded : boolean = false;
  imagePreview: string;

  private subject = new Subject<any>();

  constructor(
    // private router: Router,
    protected localStorage: LocalStorage
  ) { }

  storeFile(file: string) {
    this.localStorage.setItem('image', file)
      .subscribe(() => {
    
      });
  }

  getFile() : any {
    return this.localStorage.getItem<string>('image');
    // return this.localStorage.getItem<string>('image')
    //   .subscribe((image) => {
    //     console.log(image)
    // });
  }

  clearFile(): any {
    this.localStorage.clear().subscribe(() => {});
  }


  // if (window.ethereum) {
  //   const { ethereum } = window
  //   const web3Provider = new Web3(ethereum)

  //   ethereum.enable().then((account) => {
  //     const defaultAccount = account[0]
  //     web3Provider.eth.defaultAccount = defaultAccount
  //   }   
  // }

//   <div>
//   <img className="metamask-logo" src={metaMaskImg} alt="MetaMask logo" />
//   <div className="message">
//     <p>
//       <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">MetaMask</a>
//        &nbsp;is a wallet and Chrome extension that allows you to make Ethereum
//        transactions from regular websites.
//     </p>
//     <p>In order to register your asset on the blockchain, you need to have
//     it installed.
//     </p>
//     <br />
//     <Button
//       type="contained"
//       color="secondary"
//       className="install-metamask-btn"
//       onClick={() => {
//         window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en', '_blank')
//       }}
//     >
//       Install MetaMask Now
//     </Button>
//   </div>
// </div>

}
