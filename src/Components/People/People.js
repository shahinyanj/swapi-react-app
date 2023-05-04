import React, { Component } from 'react';
import Character from '../Character/Character';
import SwapiService from '../../Services/SwapiService';
import styles from './People.module.css';
import Pages from '../Pagination/Pagination';
import Spinner from '../Spinner/Spinner';


class People extends Component {
    swapi = new SwapiService();

    state = {
        people: [],
        loading: true,
        selectedCharacter: null,
        showPagination: true,
        showButton: true
    };

    async componentDidMount() {
        const people = await this.swapi.getAllPeople();
        console.log(people);
        this.setState({people, loading: false});
    }

    handleDataUpdate = async (pageNumber) => {
         const newPeople = await this.swapi.getNextPage(pageNumber);
         this.setState({people: newPeople});
         console.log(newPeople);
    }


    render() {
        console.log(this.state.selectedCharacter);

        return (
            <div className={styles.people_container}>
                {
                    this.state.showButton && 
                    <header className={styles.people_header}>
                        <button className={styles.people_btn_header}>People</button>
                    </header>
                }
                
                <div className={styles.people_list}>
                {
                    this.state.loading ? <Spinner/>
                    :
                    !this.state.selectedCharacter && this.state.people.map((character) => 
                        <>
                            <button
                                className={styles.people_btn}
                                onClick={() => {this.setState({selectedCharacter: character.name, showPagination: false, showButton: false})}}>
                                <span>{character.name}</span>
                            </button>
                            <span className={styles.line}></span>
                        </> )
                }

                {
                    this.state.selectedCharacter && 
                    <>
                        <div className={styles.people_header}>
                            <button className={styles.people_btn_header} onClick={() => {this.setState({selectedCharacter: null, showButton: true, showPagination: true})}}>Back</button>
                        </div>
                        <Character character={this.state.people.find((item) => item.name === this.state.selectedCharacter)}/>
                    </>
                }

                </div>
                {
                    this.state.showPagination && <footer className={styles.people_footer}><Pages handleDataUpdate={this.handleDataUpdate} onClick={() =>{this.setState({showPagination: !this.state.showPagination, showButton: !this.state.showButton}) }}/></footer>
                }
            </div>
        );
    };
}

export default People;