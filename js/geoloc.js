window.getGeolocation = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject("Geolocation non supportée");
        } else {
            navigator.geolocation.getCurrentPosition(
                position => {
                    resolve({
                        coords: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        }
                    });
                },
                error => {
                    reject(error.message);
                }
            );
        }
    });
};
