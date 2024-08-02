import '../style/Home.css';

export default function Map (){
    return(
        <div id='iframe'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.3745138273694!2d36.28786857500148!3d33.51764717336291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e7313216bdf5%3A0xc6e5547765419bc3!2sAl%20Shaalan%20St%2C%20Damascus%2C%20Syria!5e0!3m2!1sen!2seg!4v1722495863762!5m2!1sen!2seg" 
        width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}