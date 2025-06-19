import { Component, type ChangeEvent, type FormEvent } from 'react';
import ShoppingItem from './ShoppingItem';

interface Purchase {
    purchaseName: string;
    id: number;
}

interface State {
    shoppingList: Purchase[];
    currentItem: string;
}

export default class ShoppingList extends Component<{}, State> {
    state: State = {
        shoppingList: [],
        currentItem: '',
    };

    handlePurchase = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            currentItem: e.target.value,
        });
    };

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState((prevState: State) => ({
            shoppingList: [
                ...prevState.shoppingList,
                { purchaseName: prevState.currentItem, id: Date.now() },
            ],
            currentItem: '',
        }));
    };

    handleDelete = (id: number): void => {
        this.setState((prevState: State) => ({
            shoppingList: prevState.shoppingList.filter(
                (purchase: Purchase) => purchase.id !== id
            ),
        }));
    };

    render() {
        return (
            <>
                <div className="shopping-container">
                    <div className="shopping-header">
                        <h1>🛒 Shopping List</h1>
                        <p>Keep track of what you need to buy</p>
                    </div>

                    {this.state.shoppingList.length > 0 && (
                        <div className="item-count">
                            {this.state.shoppingList.length} item
                            {this.state.shoppingList.length !== 1 ? 's' : ''} in
                            your list
                        </div>
                    )}

                    <form
                        onSubmit={this.handleSubmit}
                        className="shopping-form"
                    >
                        <div className="form-group">
                            <div style={{ flex: 1 }}>
                                <label htmlFor="item">Add New Item</label>
                                <input
                                    type="text"
                                    id="item"
                                    value={this.state.currentItem}
                                    onChange={this.handlePurchase}
                                    placeholder="e.g., Milk, Bread, Apples..."
                                    className="form-input"
                                />
                            </div>
                            <button type="submit" className="submit-btn">
                                Add Item
                            </button>
                        </div>
                    </form>

                    <ShoppingItem
                        shoppingList={this.state.shoppingList}
                        handleDelete={this.handleDelete}
                    />
                </div>
            </>
        );
    }
}
