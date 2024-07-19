import { VideoCard } from "./VideoCard"


const VIDEOS = [{
    title: "How to learn coding in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumb: "ph1.jpg",
    author: "Venu",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn jumping in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumb: "ph1.jpg",
    author: "Venu",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn skying in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumb: "ph1.jpg",
    author: "Venu",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn playing in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumb: "ph1.jpg",
    author: "Venu",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn playing in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumb: "ph1.jpg",
    author: "Venu",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn playing in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumb: "ph1.jpg",
    author: "Venu",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn playing in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumb: "ph1.jpg",
    author: "Venu",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn playing in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumb: "ph1.jpg",
    author: "Venu",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn playing in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumb: "ph1.jpg",
    author: "Venu",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn playing in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumb: "ph1.jpg",
    author: "Venu",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn playing in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumb: "ph1.jpg",
    author: "Venu",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn playing in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumb: "ph1.jpg",
    author: "Venu",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn playing in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumb: "ph1.jpg",
    author: "Venu",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn playing in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumb: "ph1.jpg",
    author: "Venu",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn playing in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumb: "ph1.jpg",
    author: "Venu",
    views: "100k",
    timestamp: "2 days ago"
}, {
    title: "How to learn playing in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumb: "ph1.jpg",
    author: "Venu",
    views: "100k",
    timestamp: "2 days ago"
}]


export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
                title={video.title}
                image={video.image}
                thumb={video.thumb}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
        ></VideoCard>
            </div>)}
    </div>
}