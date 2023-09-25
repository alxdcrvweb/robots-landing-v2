import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./header.module.sass";
import { useInjection } from "inversify-react";
import { UIStore } from "../../stores/UIStore";
import { observer } from "mobx-react";
import classNames from "classnames";

const ConnectButtonCustom = observer(() => {
  const { color } = useInjection(UIStore);
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
                color: color
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className={styles.button}
                    style={{ color: color, padding: "14px" }}
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className={styles.button}
                    style={{ color: color }}
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    type="button"
                    className={classNames(styles.button, styles.button__chain)}
                  >
                    {chain.name}
                  </button>

                  <button
                    onClick={openAccountModal}
                    className={classNames(styles.button, styles.button__balance)}
                    type="button"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
});
export default ConnectButtonCustom;
