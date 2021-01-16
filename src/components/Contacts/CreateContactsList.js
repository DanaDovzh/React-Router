import React, { Component } from 'react';
import ChooseGender from "./ChooseGender";
import BarneyPhoto from "../../img/avatars/424431.svg";
import RobinPhoto from "../../img/avatars/949666.svg";
import AnonPhoto from "../../img/avatars/anonymous.svg";
import LidaPhoto from "../../img/avatars/921082.svg";
import MarchenPhoto from "../../img/avatars/921110.svg";
import TeodorPhoto from "../../img/avatars/145859.svg";
import Contact from "./Contact";

export const contactsList = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
    photo: BarneyPhoto,
    describe: 'He was the type of person who would have helped anyone – a real good egg.',
    id: 1
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
    photo: RobinPhoto,
    describe: "Look like a million dollars - to look extremely good",
    id: 2
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    photo: AnonPhoto,
    describe: 'He or she likes ice cream and chocolate.',
    id: 3
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
    photo: LidaPhoto,
    describe: 'Lilia is always looking out her window to see what the neighbors are doing – what a busybody!',
    id: 4
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
    photo: MarchenPhoto,
    describe: 'Norm',
    id: 5
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
    photo: TeodorPhoto,
    describe: 'Not a hair out of place - to have a perfect appearance ',
    id: 6
}];

class CreatePostPage extends Component {
    state = {
        contacts: contactsList,
        checkMale: true,
        checkFemale: true,
        checkOther: true,
        search: true
    };

    findGender = () => {
        let arrayChoose = [], arrayAllGenders = [];
        let resultArray = [];
        this.setState({ search: true });

        if (this.state.checkFemale) {
            arrayChoose.push(this.state.contacts.filter(contact =>
                contact.gender === "female"
            ));
            arrayAllGenders = arrayChoose.flat(Infinity);
        }

        if (this.state.checkMale) {
            arrayChoose.push(this.state.contacts.filter(contact =>
                contact.gender === "male"
            ));
            arrayAllGenders = arrayChoose.flat(Infinity);
        }

        if (this.state.checkOther) {
            arrayChoose.push(this.state.contacts.filter(contact =>
                contact.gender !== "male" && contact.gender !== "female"
            ));
            arrayAllGenders = arrayChoose.flat(Infinity);
        }

        (arrayAllGenders.length !== 0) ? this.setState({ genderFilter: true }) :
         this.setState({ genderFilter: false });

        //  console.log(this.state.genderFilter, arrayAllGenders.length)

        contactsList.map(contact => {
            arrayAllGenders.map(item => {
                if (contact === item) resultArray.push(contact);
            })
        })

        if (!resultArray.length) {
            this.setState({ search: false});
            console.log("array simple", this.state.search);
        }
        this.setState({ contacts: resultArray });
    }
    filterGenders = (event) => {
        this.setState({ contacts: contactsList });
        this.setState({ [event.target.name]: event.target.checked }, this.findGender);
    };

    filterSearch(event) {
        const enterValue = event.target.value.toLowerCase();
        const newArray = [];
        const neededKeys = ["firstName", "lastName", "phone"];
        if (!enterValue) {
            this.filterGenders(event);
            this.setState({ search: true })
        } else {
            this.state.contacts.forEach((el, index) => {
                neededKeys.map(item => {
                    if (this.state.contacts[index][item].toLowerCase().indexOf(enterValue) !== -1) {
                        if (!newArray.includes(el)) {
                            newArray.push(el);
                        };
                        this.setState({ search: true });
                    }
                });
            });
            (!newArray.length) ? this.setState({ search: false }) :
                this.setState({ contacts: newArray });
        };
    };

    createList() {
        return (this.state.search) ? this.state.contacts.map(contact => <Contact {...contact} />)
            : (<div className="no-contacts">No contacts found</div>)
    };
    render() {
        return (
            <div className="main-contacts">
                <div className="active-action">
                    <ChooseGender funcG={this.filterGenders} checkMale={
                        this.state.checkMale
                    }
                        checkFemale={this.state.checkFemale}
                        checkOther={this.state.checkOther} />
                    <div className="search-place">
                        <input placeholder="Search" onChange={(event) => this.filterSearch(event)} />
                    </div>
                </div>
                <div className="contacts-list">
                    {this.createList()}
                </div>
            </div>
        )
    }
}

export default CreatePostPage;