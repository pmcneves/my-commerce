import { match } from "react-router"

type ItemPageModel = {
    match: match
}

const ItemPage: React.FC<ItemPageModel> = ({match}: ItemPageModel) => {
    return (
        <main className="section-padding">
            <div className="container">
                <div className="item">
                    <div className="item-left">
                    </div>
                    <div className="item-right">
                    </div>

                </div>
            </div>
        </main>
    )
}

export default ItemPage
