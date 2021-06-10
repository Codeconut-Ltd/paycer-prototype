import React from 'react'
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers'
import BaseCard, { CardProps as BaseCardProps } from 'react-bootstrap/Card'
import BaseCardImg, { CardImgProps as BaseCardImgProps } from 'react-bootstrap/CardImg'
import BaseCardColumns from 'react-bootstrap/CardColumns'
import BaseCardDeck from 'react-bootstrap/CardDeck'
import BaseCardGroup from 'react-bootstrap/CardGroup'
import './card.styles.scss'

export interface CardProps extends BaseCardProps {
    style?: object
}
export interface CardImgProps extends BaseCardImgProps {
    src: string
    alt?: string
}
export interface CardColumnsProps {}
export interface CardDeckProps {}
export interface CardGroupProps {}

const Card = (props: CardProps) => <BaseCard {...props} />
export const CardImg = (props: CardImgProps) => <BaseCardImg {...props} />
export const CardColumns = (props: CardColumnsProps) => <BaseCardColumns {...props} />
export const CardDeck = (props: CardDeckProps) => <BaseCardDeck {...props} />
export const CardGroup = (props: CardGroupProps) => <BaseCardGroup {...props} />

Card.Body = BaseCard.Body
Card.Title = BaseCard.Title
Card.Subtitle = BaseCard.Subtitle
Card.Link = BaseCard.Link
Card.Text = BaseCard.Text
Card.Header = BaseCard.Header
Card.Footer = BaseCard.Footer
Card.ImgOverlay = BaseCard.ImgOverlay
Card.Img = CardImg
Card.Columns = CardColumns
Card.Deck = CardDeck
Card.Group = CardGroup

export default Card
