import { steps } from "../constants";
import { styles } from "../styles";

const Card = ({ icon, title, description, index }) => (
  <>
    <div className="flex flex-col items-center w-72 md-max:my-6">
      <div
        className={`${
          index === 1 ? "bg-primary" : "bg-white"
        } p-12 rounded-3xl shadow-2xl`}
      >
        <img
          src={icon}
          alt={`${title} icon`}
          className="drop-shadow-[0_20px_15px_rgba(77,136,196,0.2)]"
        />
      </div>
      <div className="flex flex-col items-center w-52">
        <p className={`text-[18px] font-bold my-4`}>{title}</p>
        <p className={`text-[13px]  text-grey text-center`}>{description}</p>
      </div>
    </div>
    <div
      className={`${
        index === 2 ? "hidden" : "flex"
      } mt-[105px] w-1/5 h-0 border-2 border-dashed border-slate-200 md-max:hidden`}
    ></div>
  </>
);

const About = () => {
  return (
    <>
    <span id="how-it-work"></span>
    <section 
    
    className="bg-white flex flex-col items-center  z-10 mx-auto my-48 relative md-max:my-40 sm-max:mx-12">
      <div className="flex flex-col items-center mb-10 ">
        <p className={`${styles.aboutSubText} `}>HOW IT WORK</p>
        <h3 className={`${styles.aboutHeadText} `}>
          Rent with following 3 working steps.
        </h3>
      </div>
      <div className="flex md-max:flex-col justify-evenly md-max:items-center">
        {steps.map((step, index) => (
          <Card key={step.title} index={index} {...step} />
        ))}
      </div>
      
    </section>
    </>
  );
};

export default About;
