import React, { FunctionComponent } from 'react';

interface YoutubeEmbedProps {
    title?: string;
    videoId?: string;
}

const YoutubeEmbed: FunctionComponent<YoutubeEmbedProps> = ({
    videoId = 'jM6fvNItgyY', 
    title 
}) => {
    const embedUrl = new URL('https://www.youtube.com');
    embedUrl.pathname = `/embed/${videoId}`;

    return (
        <div style={{ width: '1000px', aspectRatio: '16/9' }}>
            <iframe
                src={embedUrl.toString()}
                title={title}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YoutubeEmbed;
