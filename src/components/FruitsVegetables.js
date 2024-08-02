import img1 from '../Images/Fruits & vegetables/product-img-1.jpg';
import img2 from '../Images/Fruits & vegetables/product-img-2.jpg';
import img3 from '../Images/Fruits & vegetables/product-img-3.jpg';
import img4 from '../Images/Fruits & vegetables/product-img-4.jpg';
import img5 from '../Images/Fruits & vegetables/product-img-5.jpg';

export default function FruitsVegetables(){
    return(
        <div class="container">
   <div class="row">
      <h3>Fruits & vegetables</h3>

      <div className="card-product correctt  col-xl-2 col-lg-3 col-md-3.5 col-sm-5 col-5">
         <div className="card cardFruits">
            <img src={img1} className="card-img-top" alt="Fruit"/>
            <div className="card-body ">
              <p className="card-text">Fruits & vegetables</p>
              <h5 className="card-title">Fresh Kiwi</h5>
              <a href="#" className=" btn btn-success">+ Add </a>
              <del>$35.00</del> <span className="primary-text spann">$32.00</span>
            </div>
          </div>
      </div>
      <div className="card-product correctt  col-xl-2 col-lg-3 col-md-3.5 col-sm-5 col-5">
         <div className="card cardFruits">
            <img src={img2} className="card-img-top" alt="Fruit"/>
            <div className="card-body ">
              <p className="card-text">Fruits & vegetables</p>
              <h5 className="card-title">Fresh Banana</h5>
              <a href="#" className=" btn btn-success">+ Add </a>
              <del>$5.00</del> <span className="primary-text spann">$3.00</span>
            </div>
          </div>
      </div>
      <div className="card-product correctt  col-xl-2 col-lg-3 col-md-3.5 col-sm-5 col-5">
         <div className="card cardFruits">
            <img src={img3} className="card-img-top" alt="Fruit"/>
            <div className="card-body ">
              <p className="card-text">Fruits & vegetables</p>
              <h5 className="card-title">Fresh Apple</h5>
              <a href="#" className=" btn btn-success">+ Add </a>
              <del>$24.00</del> <span className="primary-text spann">$18.00</span>
            </div>
          </div>
      </div>
      <div className="card-product correctt  col-xl-2 col-lg-3 col-md-3.5 col-sm-5 col-5">
         <div className="card cardFruits">
            <img src={img4} className="card-img-top" alt="Fruit"/>
            <div className="card-body ">
              <p className="card-text">Fruits & vegetables</p>
              <h5 className="card-title">Golden Pineapple</h5>
              <a href="#" className=" btn btn-success">+ Add </a>
              <span className="primary-text spann">$24.00</span>
            </div>
          </div>
      </div>
      <div className="card-product correctt  col-xl-2 col-lg-3 col-md-3.5 col-sm-5 col-5">
         <div className="card cardFruits">
            <img src={img5} className="card-img-top" alt="Fruit"/>
            <div className="card-body ">
              <p className="card-text">Fruits & vegetables</p>
              <h5 className="card-title">Beatroot</h5>
              <a href="#" className=" btn btn-success">+ Add </a>
              <del>$18.00</del> <span className="primary-text spann">$13.00</span>
            </div>
          </div>
      </div>

   </div>
   <hr class="my-lg-14 my-8"/>
</div>
    );
}