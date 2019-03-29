import React from "react";
import Prison from "./Prison";
import ProfilesList from "./ProfilesList";
import Loader from "react-loader-spinner";

class EmployerHome extends React.Component {
  render() {
    return (
      <div>
        {this.props.gpLoading ? (
          <Loader type="TailSpin" color="#2a4a45" height="30%" width="20%" />
        ) : (
          <div className="PrisonListWrapper">
            {this.props.viewingprison ? (
              <ProfilesList
                gwLoading={this.props.gwLoading}
                currentlyviewing={this.props.currentlyviewing}
                getPrisonsWorkers={this.props.getPrisonsWorkers}
                prison={this.props.currentprisonSTORE}
                clearViewing={this.props.clearViewing}
              />
            ) : (
              this.props.prisonsarraySTORE.map(
                ({ name, location, totalPrisoners, id }) => (
                  <Prison
                    viewingprison={this.props.viewingprison}
                    toggleViewing={this.props.toggleViewing}
                    key={id}
                    id={id}
                    name={name}
                    location={location}
                    totalPrisoners={totalPrisoners}
                  />
                )
              )
            )}
          </div>
        )}
      </div>
    );
  }
}

export default EmployerHome;
