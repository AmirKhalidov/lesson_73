import { Component } from 'react';

interface Purchase {
    purchaseName: string;
    id: number;
}

interface Props {
    shoppingList: Purchase[];
    handleDelete: (id: number) => void;
}

export default class ShoppingItem extends Component<Props> {
    render() {
        if (this.props.shoppingList.length === 0) {
            return (
                <div className="empty-state">
                    <div className="empty-state-icon">📝</div>
                    <h3>Your shopping list is empty</h3>
                    <p>Add some items above to get started!</p>
                </div>
            );
        }

        return (
            <div className="shopping-list">
                {this.props.shoppingList.map((purchase: Purchase) => (
                    <div key={purchase.id} className="shopping-item">
                        <span className="item-text">
                            {purchase.purchaseName}
                        </span>
                        <button
                            onClick={() => this.props.handleDelete(purchase.id)}
                            className="delete-btn"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}
