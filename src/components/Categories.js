import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все категории'
                },
                {
                    key: 'chairs',
                    name: 'Стулья'
                },
                {
                    key: 'tables',
                    name: 'Столы'
                },
                {
                    key: 'lamps',
                    name: 'Светильники'
                },
                {
                    key: 'sofa',
                    name: 'Диваны'
                }
            ]
        }
    }
  
    render() {
    return (
        <div className='categories'>
            {this.state.categories.map(el => (
                <div key={el.key}>{el.name}</div>
            ) )}
        </div>
    )
  }
}

export default Categories