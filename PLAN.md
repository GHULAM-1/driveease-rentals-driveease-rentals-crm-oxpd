# Build Plan: DriveEase Rentals CRM

**Client:** DriveEase Rentals
**Total action points:** 8

This plan was generated from the approved action points. Items are ordered by build dependency — start at the top and work down.

---

### 1. Build Fleet Management Module

_Category: `feature` · Priority: `high`_

Develop a fleet management module where each car has a profile including registration, model, year, current location, status (available, rented, in service), and service history.

**Acceptance criteria:**
- Can view a list of all cars with their details and statuses.
- Can update car statuses and locations.
- Service history can be logged and retrieved for any car.

---

### 2. Implement Booking System

_Category: `feature` · Priority: `high`_

Create a booking system that allows staff to check car availability by date range, create new bookings, and prevents double bookings automatically.

**Acceptance criteria:**
- System shows car availability for specific date ranges without conflict.
- New bookings can be added and saved.
- Attempts to double book a car are blocked by the system.

---

### 3. Develop Customer Management Module

_Category: `feature` · Priority: `high`_

Set up a CRM module for storing customer profiles, document uploads (CNIC, license), rental history, and notes.

**Acceptance criteria:**
- Customer profiles can be created and retrieved.
- Documents (CNIC, license) can be uploaded and attached to customer profiles.
- Rental history is viewable within customer profile.

---

### 4. Create Payments and Invoicing Module

_Category: `feature` · Priority: `high`_

Record manual payments against bookings, generate invoices, and produce daily/monthly collection reports.

**Acceptance criteria:**
- Payments can be recorded against each booking.
- Invoices can be generated for completed bookings.
- Daily and monthly reports display total collections accurately.

---

### 5. Design Branch-Level Access Control

_Category: `feature` · Priority: `medium`_

Implement access controls such that each branch can see its own data, while the owner can view all data across branches.

**Acceptance criteria:**
- Users can only access data pertinent to their branch unless given owner permissions.
- Owner login displays data from all branches.

---

### 6. Integrate Public Booking Inquiry Form

_Category: `integration` · Priority: `medium`_

Build a public-facing booking inquiry form on the company website that creates a lead in the CRM system for staff to review.

**Acceptance criteria:**
- Form submissions create lead entries in the CRM.
- Staff can access and convert leads into bookings.

---

### 7. Implement Vehicle Handover and Return Checklist

_Category: `feature` · Priority: `medium`_

Develop a mobile-friendly checklist for vehicle handover and return, including photo uploads for fuel levels, mileage, and car condition.

**Acceptance criteria:**
- Staff can complete checklists via mobile devices at handover and return.
- Photos can be uploaded and associated with bookings.
- Checklists are stored and retrievable in the system.

---

### 8. Design Owner Dashboard and Reports

_Category: `ui` · Priority: `low`_

Create a dashboard for the owner with daily operational updates and a reports section with weekly and monthly analytics on fleet and rental metrics.

**Acceptance criteria:**
- Dashboard provides summarized daily updates on cars out, cash collected, and pending returns.
- Reports section offers detailed weekly and monthly metrics like revenue per branch and idle cars.

