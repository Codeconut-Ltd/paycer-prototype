import { Formik, FormikValues } from 'formik'
import React, { FC } from 'react'
import { Form as BootstrapForm } from 'react-bootstrap'
import { DerivedFormikProps, FormProps } from './types'
import Group from './group'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import Range from './range'
import Select from './select'
import Textarea from './textarea'
import './form.styles.scss'

type FormComponent = FC<FormProps<FormikValues>> & {
    Group: typeof Group
    Input: typeof Input
    Checkbox: typeof Checkbox
    Radio: typeof Radio
    Range: typeof Range
    Select: typeof Select
    Textarea: typeof Textarea
}

const Form: FormComponent = ({ className, children, ...restProps }: FormProps<FormikValues>) => (
    <Formik {...restProps}>
        {({ handleSubmit }: DerivedFormikProps<FormikValues>) => (
            <BootstrapForm className={className} onSubmit={handleSubmit}>
                {children}
            </BootstrapForm>
        )}
    </Formik>
)

Form.Group = Group
Form.Input = Input
Form.Checkbox = Checkbox
Form.Radio = Radio
Form.Range = Range
Form.Select = Select
Form.Textarea = Textarea

export * from './types'
export default Form