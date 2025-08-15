import Error from "../assets/404.jpg";

export const NotFound = () => {
    return (
        <>
         <div className="not-found">
                <img src={Error} alt="404 Not Found" />
                <span>Parece que esta página no existe</span>
           
        </div>
        </>

    );
};
