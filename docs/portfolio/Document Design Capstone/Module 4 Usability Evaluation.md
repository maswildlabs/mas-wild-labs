# Module 4: Usability Evaluation

## Evaluation of the Ubiquiti Cloud Gateway Ultra Guide
While Ubiquiti hardware is industry-leading, their installation guide is overly minimalist. It relies almost entirely on pictures with zero written troubleshooting help, which can intimidate users without strong technical skills. 

The document lacks information that might help a layperson understand what they are doing. For example, the "Package Contents" uses labels "a" through "d" without a key, leaving users to guess about the specific hardware they are holding.

## Proposed Redesign of Package Contents
To improve clarity, the "Package Contents" should be converted from vague labels into a descriptive table:

| Item | Component Name | Description |
| :--- | :--- | :--- |
| **A** | Cloud Gateway Ultra | The primary security gateway and UniFi controller |
| **B** | USB-C Power Supply | Requirement: 5V DC, 3A. Use only the provided adapter |
| **C** | Ethernet Cable | Category 6 (Cat6) patch cable for modem connection |
| **D** | Mounting Hardware | Screws and anchors for wall-mounting |

## Technical Safety Nets
I propose adding a "Pre-Configuration" checklist and a "Troubleshooting" box to turn the guide into a real, functional tool:

* **Power-On Verification:** Wait for the "Ready for Setup" prompt on the device screen.
* **Bluetooth Connectivity:** Ensure the mobile device has Bluetooth enabled and is within 5 feet of the gateway.
* **Status Light:** Do not open the UniFi app until the gateway displays a steady light pattern.
* **Troubleshooting:** * If the device does not power on: Verify the USB-C cable is fully seated in both the gateway and the outlet.
    * If the app cannot find the gateway: Restart your phone's Bluetooth and ensure no heavy wireless interference is nearby.