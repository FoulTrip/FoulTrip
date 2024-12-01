import React, { useState } from 'react';

interface PreviewProps {
    url: string;
    height?: number; // Propiedad para definir la altura
}

const PagePreview: React.FC<PreviewProps> = ({ url, height = 500 }) => {
    const [loading, setLoading] = useState(true);

    // Función para manejar el evento de carga
    const handleLoad = () => {
        setLoading(false);
    };

    return (
        <div
            className="flex relative w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg"
            style={{ height: `${height}px` }} // Altura configurable
        >
            {url ? (
                <>
                    {loading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                            <span className="text-xl text-gray-600">Cargando...</span>
                        </div>
                    )}
                    <iframe
                        src={url}
                        title="Page Preview"
                        className="w-full h-full"
                        onLoad={handleLoad}
                        sandbox="allow-scripts allow-same-origin allow-popups"
                    ></iframe>
                </>
            ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-xl text-gray-600">Este proyecto no está desplegado</p>
                </div>
            )}
        </div>
    );
};

export default PagePreview;
