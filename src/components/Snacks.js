import img1 from '../Images/snacks & chocolates/product-img-1.jpg';
import img2 from '../Images/snacks & chocolates/product-img-2.jpg';
import img3 from '../Images/snacks & chocolates/product-img-3.jpg';
import img4 from '../Images/snacks & chocolates/product-img-4.jpg';
import img5 from '../Images/snacks & chocolates/product-img-5.jpg';

export default function Snacks(){
    return(
        <div class="container">
   <h3>Biscuits, snacks & chocolates</h3>
   <div class="row">
      

      <div className="card-product correctt col-xl-2 col-lg-3 col-md-3.5 col-sm-5 col-5">
         <div className="card cardFruits">
            <img src={img1} className="card-img-top" alt="Fruit"/>
            <div className="card-body ">
              <p className="card-text">Bakery & Biscuits</p>
              <h5 className="card-title">Cadbury 5 Star Chocolate</h5>
              <a href="#" className=" btn btn-success">+ Add </a>
              <del>$35.00</del> <span className="primary-text spann">$32.00</span>
            </div>
         </div>
      </div>

      <div className="card-product correctt  col-xl-2 col-lg-3 col-md-3.5 col-sm-5 col-5">
         <div className="card cardFruits">
            <img src={img2} class="card-img-top" alt="Fruit"/>
            <div className="card-body ">
              <p className="card-text">Dairy, Bread & Eggs</p>
              <h5 className="card-title">Amul Butter - 500 g</h5>
              <a href="#" className=" btn btn-success">+ Add </a>
              <del>$18.00</del> <span className="primary-text spann">$13.00</span>
            </div>
         </div>
      </div>
      <div className="card-product correctt  col-xl-2 col-lg-3 col-md-3.5 col-sm-5 col-5">
         <div className="card cardFruits">
            <img src={img3} className="card-img-top" alt="Fruit"/>
            <div className="card-body ">
              <p className="card-text">Snacks & Munshies</p>
              <h5 className="card-title">Slurrp Millet Chocolate</h5>
              <a href="#" className=" btn btn-success">+ Add </a>
              <del>$5.00</del> <span className="primary-text spann">$3.00</span>
            </div>
         </div>
      </div>

      <div className="card-product correctt  col-xl-2 col-lg-3 col-md-3.5 col-sm-5 col-5">
         <div className="card cardFruits" >
            <img src={img4} className="card-img-top" alt="Fruit"/>
            <div className="card-body ">
              <p className="card-text">Snacks & Munshies</p>
              <h5 className="card-title">Haldiram's Sev Bhujia</h5>
              <a href="#" className=" btn btn-success">+ Add </a>
              <del>$24.00</del> <span className="primary-text spann">$18.00</span>
            </div>
         </div>
      </div>

      <div className="card-product correctt  col-xl-2 col-lg-3 col-md-3.5 col-sm-5 col-5">
         <div className="card cardFruits">
            <img src={img5} className="card-img-top" alt="Fruit"/>
            <div className="card-body ">
              <p className="card-text">Snacks & Munshies</p>
              <h5 className="card-title">Omion Flavour Potato</h5>
              <a href="#" className=" btn btn-success">+ Add </a>
              <del>$5.00</del> <span className="primary-text spann">$3.00</span>
            </div>
         </div>
      </div>

   </div>
   <hr class="my-lg-14 my-8"></hr>
</div>
    );
}