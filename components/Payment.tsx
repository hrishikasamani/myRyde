import { Text, View } from "react-native"
import CustomButton from "./CustomButton"

const Payment = () => {
    const openPaymentSheet = async () => {};

    return (
        <>
            <CustomButton
                title="Confirm Ride"
                className="my-8"
                onPress={openPaymentSheet}
            />
        </>
    )
}

export default Payment;