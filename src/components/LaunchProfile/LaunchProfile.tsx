import React from "react";
import {LaunchProfileQuery} from "../../generated/graphql";
import './styles.css';

interface Props {
    data: LaunchProfileQuery;
}

const className = 'LaunchProfile';

const LaunchProfile: React.FC<Props> = ({data}) => {
    function render() {
        if (!data.launch) {
            return <div>No Launch Available</div>;
        }

        return (
            <div className={className}>
                <div className={`${className}__status`}>
                    <span>
                        Flight {data.launch.flight_number}:
                    </span>
                    {renderStatus()}
                    {renderTitle()}
                    {renderDetails()}
                    {renderImages()}
                </div>
            </div>
        )
    }

    function renderStatus() {
        if (!data.launch) {
            return null;
        } else {
            return (data.launch.launch_success) ? (
                <span className={`${className}_success`}>Success</span>
            ) : (
                <span className={`${className}__failed`}>Failed</span>
            );
        }
    }

    function renderTitle() {
        if (!data.launch) {
            return null;
        } else {
            return (
                <h1 className={`${className}__title`}>
                    {data.launch.mission_name}
                    {data.launch.rocket &&
                    ` (${data.launch.rocket.rocket_name}) |
                            ${data.launch.rocket.rocket_type})`
                    }
                </h1>
            )
        }
    }

    function renderDetails() {
        if (!data.launch) {
            return null;
        } else {
            return (
                <p className={`${className}__description`}>
                    {data.launch.details}
                </p>
            );
        }
    }

    function renderImages() {
        if (data.launch && !!data.launch.links && !!data.launch.links.flickr_images && !!data.launch.mission_name) {
            return (
                <div className={`${className}__image-list`}>
                    {
                        data.launch.links.flickr_images.map((image, index)=> {
                            return (image) ?
                                <img src={image} className={`${className}__image`} alt={`image_${index}`} key={image}/>
                                : null;
                        })
                    }
                </div>
            )
        } else {
            return null;
        }
    }

    return render();
}

export default LaunchProfile;