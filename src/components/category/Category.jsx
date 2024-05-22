import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/128/3703/3703410.png',
        name: 'snacks'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/7192/7192728.png',
        name: 'dry fruits'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/2870/2870873.png',
        name: 'eggs'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/1531/1531385.png',
        name: 'rice'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/10552/10552057.png',
        name: 'sugar'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/2160/2160302.png',
        name: 'condiments'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/2079/2079331.png',
        name: 'pickles'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/9954/9954768.png',
        name: 'dairy'
    }
]

const Category = () => {
    // naviaget 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;