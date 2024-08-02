import googlePlay from '../Images/contact/googleplay-btn.svg';
import appstore from '../Images/contact/appstore-btn.svg';
import iphone from '../Images/contact/iphone-2.png';

export default function Countact(){
    return(
        <div className="container">

   <hr className="my-lg-14 my-8"/>

   <div className="row align-items-center">

      <div className="offset-lg-2 col-lg-4 col-md-6">
         <div className="text-center">
            <img src={iphone} alt="" class="img-fluid"/>
         </div>
      </div>

      <div className="col-lg-6 col-md-6">

         <div className="mb-6">
            <div className="mb-7">
               <h2>Get the FreshCart app</h2>
               <p className="mb-0">We will send you a link, open it on your phone to download the app.</p>
            </div>

            <div className="mb-5">
               <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label" for="flexRadioDefault1">Email</label>
               </div>

               <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                  <label className="form-check-label" for="flexRadioDefault2">Phone</label>
               </div>

               <form className="row g-3 mt-1">
                  <div className="col-lg-6 col-7">
                     <input type="text" className="form-control me-2" placeholder="Phone or Email"/>
                  </div>
                  <div className="col-auto">

                     <button type="submit" className="btn btn-success">Share app link</button>
                  </div>
               </form>

            </div>
            <div>
               <small>Download app from</small>
               <ul className="list-inline mb-0 mt-3">
                  <li className="list-inline-item">
                     <a target="_blank" href="https://www.apple.com/store"><img src={appstore} alt="" style={{width: '140px'}}/></a>
                  </li>

                  <li className="list-inline-item">
                     <a target="_blank" href="https://play.google.com/store/games?device=windows&pli=1"><img src={googlePlay} alt="" style={{width: "140px"}}/></a>
                  </li>
               </ul>
            </div>
         </div>
      </div>

   </div>

   <hr className="my-lg-14 my-8"/>
</div>
    );
}