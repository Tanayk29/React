function Hello(){

    let myName = "Tanay";

    let num = 456;

    let emailId = () => {
        return "tanay.kulkarni2014@gmail.com"
    }

    return <p>Message Number :- {num} - Hello !!! This Is The Future Speaking {myName} and email Id - {emailId()}</p>

    // This is similar to `Hey my nae is ${myName}` -> in javascript

}

export default Hello;

// { }  -> this will enable dynamic (variable/ method etc anything) 
// suppose hamne let myName define kiya hai and you just have to use { } and inside this put myName -> {myName} and there you have you dynamic

// for method -> array fucntionyou need to use () -> example ->  { emailId() }