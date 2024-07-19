export function VideoCard(props: any) {
    return <div>
        <img src={props.image} className="w-16 md:w-32 lg:w-48"></img>
        <div className="grid grid-cols-12" >
            <div className="col-span-1">
                <img className={"rounded-full w-7 h-7"} src={props.thumb}></img>
            </div>
            <div className="col-span-10 pl-1">
            {props.title}
            </div>
            <div className="col-span-11 text-gray-400 text-base">
            {props.author}
            </div>
            <div className="col-span-11 text-gray-400 text-base">
                {props.views} | {props.timestamp}
            </div>
        </div>
    </div>
}