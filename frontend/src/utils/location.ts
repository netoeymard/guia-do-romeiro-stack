export function navigateToAddress(address: string) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            const destination = encodeURIComponent(address);

            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

            const mapUrl = isMobile
                ? `geo:${lat},${lng}?q=Basílica+de+São+Francisco,+Canindé+-+CE`
                : `https://www.google.com/maps/dir/${lat},${lng}/${destination}`;

            window.location.href = mapUrl;
        },
        () => {
            alert('Não foi possível obter sua localização atual.');
        }
    );
    ;
}