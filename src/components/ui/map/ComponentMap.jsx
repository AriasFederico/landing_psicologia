export const ComponentMap = ({ direccion, zoom = 15 }) => {
    // coordenadas

    const direccionEncoded = encodeURIComponent(direccion);

    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&q=${direccionEncoded}&maptype=roadmap&zoom=${zoom}`;

    return (
        <div style={{ width: '100%' }}>
            <iframe
                title={`Mapa de ${direccion}`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                src={mapUrl}
            ></iframe>
        </div>
    );
};