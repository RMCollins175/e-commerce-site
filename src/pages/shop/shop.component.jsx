import React, { Component } from 'react'
import SHOP_DATA from './shop.data'
import Collection from '../../components/preview-collection/collection.component'

export default class Shopage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {

        const {collections} = this.state
        return (
            <div className="shoppage">
                {collections.map(({id, ...otherCollectionProps}) => (
                    <Collection
                    key={id}
                    {...otherCollectionProps}
                    />
                ))}
            </div>
        )
    }
}


