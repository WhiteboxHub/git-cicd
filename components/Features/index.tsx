import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="What is CI/CD?"
            paragraph="CI/CD stands for Continuous Integration and Continuous Deployment. It is a software development practice that involves integrating code changes into a central repository frequently, usually through automated processes. This allows for early detection and resolution of integration errors, making the development process more efficient and reliable. Additionally, CI/CD enables the automation of the build, test, and deployment of software applications, ensuring that changes are delivered to users quickly and reliably."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
