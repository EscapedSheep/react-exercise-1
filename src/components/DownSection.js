import React from 'react';
import './DownSection.css';

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <h3 className="aboutMe">ABOUT ME</h3>
      <p className="aboutMe">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
        non, dolorem, cumque distinctio magni quam expedita velit laborum sunt
        amet facere tempora ut fuga aliquam ad asperiores voluptatem doloruum!
        Quasi.
      </p>
    </div>
  );
};

const EducationBlock = (experience) => (
  <div className="eduExp">
    <h4>{experience.year}</h4>
    <div>
      <h4>{experience.title}</h4>
      <p>{experience.desc}</p>
    </div>
  </div>
);

const years = [1990, 2005, 2009, 2012];
const titles = [
  'I was born in Katowice',
  'Secondary school specializing in artistic',
  'First level graducation in Graphic Design',
  'Second level graducation in Graphic Design',
];
const descs = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sapiente, exercitationem, totam, dolores iste dolore est aut modi.',
  'Eos explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibbusdam quis volutatibus',
  'Aspernatur, molitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam perferendis? lusto, quibusdam asperiores unde repellat.',
  'Ducimus, aliquam tempore autem itaque et accusantium!',
];

const DownSection = () => (
  <section className="downSection">
    <AboutMe></AboutMe>
    <div className="edu">
      <h3 className="edu">EDUCATION</h3>
      <EducationBlock
        year={years[0]}
        title={titles[0]}
        desc={descs[0]}
      ></EducationBlock>
      <EducationBlock
        year={years[1]}
        title={titles[1]}
        desc={descs[1]}
      ></EducationBlock>
      <EducationBlock
        year={years[2]}
        title={titles[2]}
        desc={descs[2]}
      ></EducationBlock>
      <EducationBlock
        year={years[3]}
        title={titles[3]}
        desc={descs[3]}
      ></EducationBlock>
    </div>
  </section>
);

export default DownSection;
