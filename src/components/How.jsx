import { benefits } from "../constants";
import { styles } from "../styles";

const How = () => {
  return (
    <>
    <span id="why"></span>
    <section
      className={`px-8 sm-max:px-0 py-6 relative w-full mx-auto bg-white-200 flex items-center md-max:justify-center `}
    >
      <div>
        <img className="w-11/12 md-max:hidden" src={benefits[0].icon} alt="Car picture" />
      </div>
      <div className="ml-16 md-max:m-0 md-max:flex md-max:flex-col md-max:items-center ">
        <div className="w-[70%] sm-max:w-full md-max:text-center">
          <p className={`${styles.aboutSubText} mb-4 `}>{benefits[0].title}</p>
          <h4 className={`${styles.aboutHeadText} mb-4 sm-max:mx-2`}>{benefits[0].subtitle}</h4>
        </div>
        <div className="sm-max:flex sm-max:flex-col sm-max:items-center ">
          {benefits.map((benefit) => {
            if (benefit.id != "why") {
              return (
                <div key={benefit.id} className="flex items-center my-6 sm-max:my-4 ">
                  <div className="p-2 mr-6 sm-max:mr-4 grid place-items-center bg-white rounded-lg shadow-2xl shrink-0 w-[40px] h-[40px] ">
                    <img
                      className="w-[40px]"
                      src={benefit.icon}
                      alt={`${benefit.title} icon`}
                    />
                  </div>
                  <div className="w-72 ">
                    <p className="font-bold mb-[3px] ">{benefit.title}</p>
                    <p className="text-grey text-[13px]">{benefit.subtitle}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
    </>
  );
};

export default How;
