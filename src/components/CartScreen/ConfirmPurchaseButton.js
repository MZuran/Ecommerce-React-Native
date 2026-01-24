import React from 'react'
import { Alert } from 'react-native'
import CustomButton from '../Button'

import { useUpdateCardStockByAmountMutation } from '../../services/shopService'
import { useSelector } from 'react-redux'

export default function ConfirmPurchaseButton({ cart, clearCartFunction = () => { } }) {

    const [updateStockByDelta] = useUpdateCardStockByAmountMutation();
    const user = useSelector(state => state.auth.value.email)

    const pressHandler = async () => {

        try {

            for (let i = 0; i < cart.items.length; i++) {
                const card = cart.items[i];
                
                await updateStockByDelta({ cardId: card.id, delta: card.qty, }).unwrap();
            }

            Alert.alert("Success", "Purchase completed!");
            clearCartFunction()

        } catch (error) {
            console.error(error)
            Alert.alert("Out of stock", "One or more items are no longer available.");
        }

    };

    return (
        <>
            {
                user ?
                    <CustomButton onPress={pressHandler}> Confirm Purchase </CustomButton>
                    :
                    <CustomButton buttonType={"faded"}> Confirm Purchase </CustomButton>
            }
        </>
    );
}
