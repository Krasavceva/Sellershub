import Headuser from "../headuser/Headuser";
import Footer from "../footer/Footer";
import img from "../../../assets/images/img.png";
const One = () => {
  return (
    <div>
      <Headuser />
      <div className="text">
        <p>
          Но перспективное планирование однозначно фиксирует необходимость
          первоочередных требований. В частности, укрепление и развитие
          внутренней структуры позволяет оценить значение благоприятных
          перспектив.
        </p>
        <img src={img} />
      </div>
      <Footer />
    </div>
  );
};

export default One;
