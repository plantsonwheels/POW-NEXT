import { NextResponse } from "next/server"

// Default services data
const defaultServices = [
  {
    id: 1,
    name: "Plant Delivery for Homes, Offices, Events",
    description: "Efficient delivery of healthy plants to various locations",
    icon: "Truck",
  },
  {
    id: 2,
    name: "Gardening Services for Apartments & Societies",
    description: "Professional gardening solutions for residential areas",
    icon: "Leaf",
  },
  {
    id: 3,
    name: "Terrace Garden Designing",
    description: "Transforming terraces into lush green spaces",
    icon: "Trees",
  },
  {
    id: 4,
    name: "Balcony Makeover or Customization",
    description: "Enhancing and personalizing balcony plant setups",
    icon: "Home",
  },
  {
    id: 5,
    name: "Play School Garden Setup",
    description: "Creating engaging green spaces for play schools",
    icon: "Smile",
  },
  {
    id: 6,
    name: "Weekly/Monthly Plant Maintenance Services",
    description: "Regular plant care through structured plans",
    icon: "Wrench",
  },
  {
    id: 7,
    name: "AMC (Annual Maintenance Contract)",
    description: "Ongoing plant care through structured plans",
    icon: "Calendar",
  },
  {
    id: 8,
    name: "Corporate Gifting",
    description: "Personalized green gifts for employees and clients",
    icon: "Gift",
  },
]

export async function GET(request) {
  try {
    return NextResponse.json({ success: true, data: defaultServices }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
