import { styles } from "../styles";
import { useState, useEffect } from "react";
import LoremIpsum from "react-lorem-ipsum";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Stars } from "../components";

const Testimonials = () => {
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState(0);
  const randomRating = Math.random() * 3 + 3.5;

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error(error));
  }, []);

  const handleNext = () => {
    if (users.length <= active + 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  const handlePrev = () => {
    if (active === 0) {
      setActive(users.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  return (
    <section className="flex flex-col  justify-center bg-white-200 py-24 pb-96 md-max:pb-[40vh]">
      <div className="flex flex-col items-center mb-20">
        <p className={styles.aboutSubText}>Testimonials</p>
        <h3 className={styles.aboutHeadText}>What people say about us?</h3>
      </div>
      <div className="flex justify-center my-6 items-center justify-evenly">
        <button
          className="w-12 h-12 rounded-full bg-white grid place-content-center 
shadow-xl md-max:mr-2"
          onClick={handlePrev}
        >
          <SlArrowLeft color="black"  />
        </button>

        {users.map((user, index) => (
          <div
            key={user.login.uuid}
            className={`${
              active == index ? "block" : "hidden"
            } flex h-48 w-4/12  md-max:flex-wrap md-max:justify-center md-max:text-center`}
          >
            <img
              src={user.picture.large}
              alt="Profile"
              className=" mr-6 object-contain rounded-full md-max:mb-10 md-max:mr-0"
            />
            <div className="flex flex-col  justify-between	h-full">
              <div className="mt-2 md-max:w-60 sm-max:min-w-[320px] min-w-[230px]">
              <LoremIpsum p={1} avgWordsPerSentence={2} />
              </div>
            
            <div className="mb-2 md-max:flex md-max:items-center md-max:flex-col">
              <p className="font-bold text-lg md-max:my-4">
                {user.name.first} {user.name.last}
              </p>
              <Stars rating={randomRating} />
            </div>
            </div>
       
          </div>
        ))}
        <button
          className="w-12 h-12 rounded-full bg-primary grid place-content-center 
shadow-xl md-max:ml-2"
          onClick={handleNext}
        >
          <SlArrowRight color="white"/>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
