import { useMutation, useQuery } from "@apollo/client";
import CONTACT_US_FORM_MUTATION from "../Graphql/mutations/contactQueries";
import useToast from "./Toast/useToast";
import GET_CONTACT_PAGE from "../Graphql/queries/contactPage";

export function useContactForm() {
    
    const { loading, error, data } = useQuery(GET_CONTACT_PAGE,{
        fetchPolicy:'cache-first'
    });

    const [
        submitContactForm,
        { loading: mutationLoading, error: mutationError },
    ] = useMutation(CONTACT_US_FORM_MUTATION);

    const { showSuccess, showError } = useToast();

    const handleFormSubmit = async (formApi, formState) => {
        console.log(formApi, formState);

        try {
            const { values } = formState;
            formApi.submitForm();

            if (
                !values.email ||
                !values.firstName ||
                !values.lastName ||
                !values.phoneNumber
            ) {
                return;
            }

            const response = await submitContactForm({
                variables: {
                    request_type: String("General Inquiry"),
                    email: String(values.email),
                    name: String(values.firstName),
                    telephone: String(values.phoneNumber),
                    orderNumber: String(values.orderNumber || ""),
                    comment: String(values.message || ""),
                    productSku: String(values.productSku || ""),
                },
            });
            if (response.data.submitContactForm) {
                showSuccess("Your form has been submitted successfully!");
                formApi.reset({});
            }
        } catch (err) {
            console.log(err.message);
            showError("Please try again.");
        }
    };
    return { handleFormSubmit, data, mutationLoading };
}
