import React from 'react'
import * as yup from 'yup'
import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'
import { FormikConfig, FormikValues } from 'formik'
import Form, { FormInputFieldProps } from './form'
import Button from '../button'

export default {
    title: 'Atom/Form/Input',
    component: Form.Input,
    subcomponents: { Form }
} as Meta

const label = 'Input field'

const helpText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et orci diam. Donec rutrum odio sit amet ante porta, sed tempus est varius.'

type StoryOptions = Partial<FormikConfig<FormikValues>> &
    Partial<FormInputFieldProps>

const Template: Story<StoryOptions> = ({
   name = 'foo',
   type,
   label,
   helpText,
   placeholder,
   required,
   initialValues = { [name]: '' },
   initialErrors,
   initialTouched,
   validationSchema
}) => (
    <Form
        initialValues={initialValues}
        initialErrors={initialErrors}
        initialTouched={initialTouched}
        validationSchema={validationSchema}
        onSubmit={action('onSubmit')}
    >
        <Form.Input
            name={name}
            type={type}
            label={label}
            helpText={helpText}
            placeholder={placeholder}
            onChange={action('onChange')}
            required={required}
        />
        <div className='d-flex justify-content-start'>
            <Button type='submit'>Submit</Button>
        </div>
    </Form>
)

export const Default = Template.bind({})
Default.args = {}

export const Label = Template.bind({})
Label.args = {
    label
}

export const Placeholder = Template.bind({})
Placeholder.args = {
    label,
    placeholder: 'Please enter some text...'
}

export const CustomType = Template.bind({})
CustomType.args = {
    type: 'number',
    label: 'Numeric input'
}

export const InitialValues = Template.bind({})
InitialValues.args = {
    label,
    initialValues: { foo: 'Hello, World!' }
}

export const HelpText = Template.bind({})
HelpText.args = {
    label,
    helpText
}

export const ErrorFeedback = Template.bind({})
ErrorFeedback.args = {
    label,
    required: true,
    initialErrors: { foo: 'This field is required' },
    initialTouched: { foo: true },
    validationSchema: yup.object({ foo: yup.string().required() })
}