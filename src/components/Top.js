import aboutIcon from "../Images/about-icons-1.svg";
import '../style/Home.css';
export default function Top (){
    return(
        <div class="container">
   <div class="row">
      <div class="col-12">
         <div class="bg-light d-lg-flex justify-content-between align-items-center py-6 py-lg-3 px-8 text-center text-lg-start rounded">
            <div class="d-lg-flex align-items-center">
               <img src={aboutIcon} alt="about-icon"/>

               <div class="ms-lg-4">
                  <h1 class="fs-2 mb-1">Welcome to FreshCart</h1>
                  <span>
                     Download the app get free food &amp;
                     <span  style={{color:"#006849"}}>$30</span>
                     off on your first order.
                  </span>
               </div>
            </div>
            <div class="mt-3 mt-lg-0">
               <a href="#" class="btn btn-dark bottun">Download FreshCart App</a>
            </div>
         </div>
      </div>
   </div>
</div>
    );
}