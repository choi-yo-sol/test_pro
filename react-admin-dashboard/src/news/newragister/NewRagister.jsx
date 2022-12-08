import NewR from "../newR/NewR";
import axios from "axios";
import React , { useState, useEffect } from "react";
 

export default function NRagiser ()  {
    const [plan, setPlan] = useState("");
    const [orders, setOrders] = useState("");
    const [customers, setCustomers] = useState("");
    const [items, setItems] = useState("");
    useEffect(() => {
        const Plansgetdata = async () => {
            try {
                const result_data1 = await axios.get("http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/orders/");
                const result_data2 = await axios.get("http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/customers/");
                const result_data3 = await axios.get("http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/items/");
                const result_data4 = await axios.get("http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/plans/");
                setOrders(result_data1.data);
                setCustomers(result_data2.data);
                setItems(result_data3.data);
                setPlan(result_data4.data);
            } catch (error) {
                console.error(error);
            }
        };
        Plansgetdata();
    }, []);


    return (

        <div className="Nragiser">
            <NewR orders ={orders} customers={customers} items={items} plan={plan}/>
            


        </div>

    )
};
