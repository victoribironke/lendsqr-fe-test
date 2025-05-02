"use client";

import { IMAGES, PAGES, USER_KEY } from "@/constants/constants";
import { useUsers } from "@/context/user-context";
import { User } from "@/types/general";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/styles/user-details.module.scss";

const UserDetails = ({ id }: { id: string }) => {
  const { push } = useRouter();
  const { blacklistUser, activateUser, deactivateUser } = useUsers();
  const [userDetails, setUserDetails] = useState<User | null>(null);

  const handleActivateUser = (userId: string) => {
    activateUser(userId);
    setUserDetails((prev) => (prev ? { ...prev, status: "active" } : prev));
  };

  const handleBlacklistUser = (userId: string) => {
    blacklistUser(userId);
    setUserDetails((prev) =>
      prev ? { ...prev, status: "blacklisted" } : prev
    );
  };

  const handleDeactivateUser = (userId: string) => {
    deactivateUser(userId);
    setUserDetails((prev) => (prev ? { ...prev, status: "inactive" } : prev));
  };

  useEffect(() => {
    const stringifiedDetails = localStorage.getItem(USER_KEY);

    if (!stringifiedDetails) push(PAGES.users);

    const storedDetails = JSON.parse(stringifiedDetails!) as User;

    if (storedDetails.id !== id) push(PAGES.users);

    setUserDetails(storedDetails);
  }, []);

  return (
    userDetails && (
      <div className={styles.container}>
        <div className={styles.arrowBack} onClick={() => push(PAGES.users)}>
          <img src={IMAGES.arrowBack} alt="" />
          <span>Back to Users</span>
        </div>
        <div className={styles.headerTextAndButtonContainer}>
          <h1>User Details</h1>
          {(userDetails.status === "inactive" ||
            userDetails.status === "pending") && (
            <div>
              <button
                className={styles.danger}
                onClick={() => handleBlacklistUser(userDetails.id)}
              >
                Blacklist User
              </button>
              <button onClick={() => handleActivateUser(userDetails.id)}>
                Activate User
              </button>
            </div>
          )}
          {userDetails.status === "active" && (
            <div>
              <button
                className={styles.danger}
                onClick={() => handleBlacklistUser(userDetails.id)}
              >
                Blacklist User
              </button>
              <button onClick={() => handleDeactivateUser(userDetails.id)}>
                Deactivate User
              </button>
            </div>
          )}
          {userDetails.status === "blacklisted" && (
            <div>
              <button onClick={() => handleActivateUser(userDetails.id)}>
                Activate User
              </button>
            </div>
          )}
        </div>

        <div className={styles.headerContainer}>
          <div className={styles.topSection}>
            <div className={styles.imageAndNameContainer}>
              <div className={styles.profileImage}>
                <img src={IMAGES.plainUser} alt="" />
              </div>
              <div className={styles.nameContainer}>
                <h3>{userDetails.fullName}</h3>
                <p>{userDetails.bankId}</p>
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.tierContainer}>
              <span>User&apos;s Tier</span>
              <div>
                {[1, 2, 3].map((val, i) => (
                  <img
                    key={i}
                    src={
                      val > userDetails.tier ? IMAGES.star : IMAGES.starFilled
                    }
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.amountContainer}>
              <h3>₦{userDetails.balance.toLocaleString()}.00</h3>
              <p>
                {userDetails.accountNumber}/{userDetails.bank}
              </p>
            </div>
          </div>
          <div className={styles.menuContainer}>
            <div>General Details</div>
            <div>Documents</div>
            <div>Bank Details</div>
            <div>Loans</div>
            <div>Savings</div>
            <div>App and System</div>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.section}>
            <h3>Personal Information</h3>
            <div className={styles.grid}>
              <div className={styles.singleInfo}>
                <span>Full name</span>
                <h4>{userDetails.fullName}</h4>
              </div>
              <div className={styles.singleInfo}>
                <span>Phone Number</span>
                <h4>{userDetails.phoneNumber}</h4>
              </div>
              <div className={styles.singleInfo}>
                <span>Email Address</span>
                <h4>{userDetails.email}</h4>
              </div>
              <div className={styles.singleInfo}>
                <span>Bvn</span>
                <h4>{userDetails.bvn}</h4>
              </div>
              <div className={styles.singleInfo}>
                <span>Gender</span>
                <h4>{userDetails.gender}</h4>
              </div>
              <div className={styles.singleInfo}>
                <span>Marital Status</span>
                <h4>{userDetails.maritalStatus}</h4>
              </div>
              <div className={styles.singleInfo}>
                <span>Children</span>
                <h4>{userDetails.children ? userDetails.children : "None"}</h4>
              </div>
              <div className={styles.singleInfo}>
                <span>Type Of Residence</span>
                <h4>{userDetails.residenceType}</h4>
              </div>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.section}>
            <h3>Education and Employment</h3>
            <div className={styles.grid}>
              <div className={styles.singleInfo}>
                <span>level of education</span>
                <h4>{userDetails.educationLevel}</h4>
              </div>
              <div className={styles.singleInfo}>
                <span>employment status</span>
                <h4>{userDetails.employmentStatus}</h4>
              </div>
              <div className={styles.singleInfo}>
                <span>Sector of employment</span>
                <h4>{userDetails.sector}</h4>
              </div>
              <div className={styles.singleInfo}>
                <span>Duration of employment</span>
                <h4>{userDetails.durationEmployment}</h4>
              </div>
              <div className={styles.singleInfo}>
                <span>Office Email</span>
                <h4>{userDetails.officeEmail}</h4>
              </div>
              <div className={styles.singleInfo}>
                <span>Monthly Income</span>
                <h4>₦{parseInt(userDetails.monthlyIncome).toLocaleString()}</h4>
              </div>
              <div className={styles.singleInfo}>
                <span>loan repayment</span>
                <h4>₦{userDetails.loanRepayment.toLocaleString()}</h4>
              </div>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.section}>
            <h3>Social</h3>
            <div className={styles.grid}>
              <div className={styles.singleInfo}>
                <span>Twitter</span>
                <h4>@{userDetails.twitter.split("/").at(-1)}</h4>
              </div>
              <div className={styles.singleInfo}>
                <span>Facebook</span>
                <h4>{userDetails.facebook.split("/").at(-1)}</h4>
              </div>
              <div className={styles.singleInfo}>
                <span>Instagram</span>
                <h4>@{userDetails.instagram.split("/").at(-1)}</h4>
              </div>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.section}>
            <h3>
              {userDetails.guarantors.length > 1 ? "Guarantors" : "Guarantor"}
            </h3>
            {userDetails.guarantors.map((guarantor, i) => (
              <div className={styles.grid} key={i}>
                <div className={styles.singleInfo}>
                  <span>Full Name</span>
                  <h4>{guarantor.fullName}</h4>
                </div>
                <div className={styles.singleInfo}>
                  <span>Phone Number</span>
                  <h4>{guarantor.phoneNumber}</h4>
                </div>
                <div className={styles.singleInfo}>
                  <span>Email Address</span>
                  <h4>{guarantor.email}</h4>
                </div>
                <div className={styles.singleInfo}>
                  <span>Relationship</span>
                  <h4>{guarantor.relationship}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default UserDetails;
