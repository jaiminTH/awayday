import React from "react";
import { teamMembers } from "../../constants/teamMembers";

const TeamMember = ({
  name,
  role,
  bio,
  imgSrc,
  coworkerName1,
  coworkerImgSrc1,
  coworkerName2,
  coworkerImgSrc2,
}) => (
  <div className="team-item-outer">
    <div className="team-item">
      <div className="team-img">
        <img src={imgSrc} alt={`${name}'s Photo`} />
      </div>
      <div className="team-desc">
        <h4>{name}</h4>
        <h5>{role}</h5>
        <p>{bio}</p>
      </div>
      {coworkerName2 && coworkerImgSrc2 ? (
        <div className="my-cowork">
          <h4>Meet my coworker!</h4>
          <div className="cowork-v2">
            <div className="pet-group">
              <div className="pet-img">
                <img src={coworkerImgSrc1} alt="" />
              </div>
              <a href="#" className="btn btn-square">
                Bandit
              </a>
            </div>
            <div className="pet-group">
              <div className="pet-img">
                <img src={coworkerImgSrc2} alt="" />
              </div>
              <a href="#" className="btn btn-square">
                Scout
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="my-cowork">
          <div className="cowork-v1">
            {coworkerName1 && coworkerImgSrc1 && (
              <div className="pet-img">
                <img src={coworkerImgSrc1} alt={`${coworkerName1}'s Pet`} />
              </div>
            )}
            {coworkerName1 && (
              <div className="cowork-desc">
                <h4>Meet my coworker!</h4>
                <a href="#" className="btn btn-square">
                  {coworkerName1}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-title">
        <h2>The team behind your screen</h2>
        <a href="#" className="btn btn-custom">
          See IT Organization Chart
        </a>
      </div>
      <div className="team-main">
        <div className="team-list">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
