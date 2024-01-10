//
//  DatePicker.swift
//  AllComponents
//
//  Created by Deepak Kaligotla on 09/01/24.
//

import Foundation
import UIKit
import React

class DatePickerViewController: UIViewController {

    var resolve: RCTPromiseResolveBlock?
    var reject: RCTPromiseRejectBlock?

    private let datePicker: UIDatePicker = {
        let picker = UIDatePicker()
        picker.datePickerMode = .date
        picker.transform = CGAffineTransform(scaleX: 1, y: 1)

        if #available(iOS 14.0, *) {
            picker.preferredDatePickerStyle = .inline
        } else {
            picker.preferredDatePickerStyle = .wheels
        }

        return picker
    }()

    init() {
        super.init(nibName: nil, bundle: nil)
        modalPresentationStyle = .overFullScreen
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
    }

    private func setupUI() {
        view.backgroundColor = UIColor(white: 0, alpha: 0.7)

        let cardView = UIView()
        cardView.layer.cornerRadius = 10
        cardView.clipsToBounds = true
        cardView.addSubview(datePicker)

        datePicker.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            datePicker.topAnchor.constraint(equalTo: cardView.topAnchor, constant: 16),
            datePicker.leadingAnchor.constraint(equalTo: cardView.leadingAnchor, constant: 16),
            datePicker.trailingAnchor.constraint(equalTo: cardView.trailingAnchor, constant: -16)
        ])

        let doneButton = UIButton(type: .system)
        doneButton.setTitle("Done", for: .normal)
        doneButton.addTarget(self, action: #selector(doneButtonTapped), for: .touchUpInside)
        cardView.addSubview(doneButton)

        doneButton.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            doneButton.trailingAnchor.constraint(equalTo: cardView.trailingAnchor, constant: -16),
            doneButton.bottomAnchor.constraint(equalTo: cardView.bottomAnchor, constant: -16)
        ])

        let cancelButton = UIButton(type: .system)
        cancelButton.setTitle("Cancel", for: .normal)
        cancelButton.addTarget(self, action: #selector(cancelButtonTapped), for: .touchUpInside)
        cardView.addSubview(cancelButton)

        cancelButton.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            cancelButton.leadingAnchor.constraint(equalTo: cardView.leadingAnchor, constant: 16),
            cancelButton.bottomAnchor.constraint(equalTo: cardView.bottomAnchor, constant: -16)
        ])

        view.addSubview(cardView)

        cardView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            cardView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            cardView.centerYAnchor.constraint(equalTo: view.centerYAnchor),
            cardView.widthAnchor.constraint(equalToConstant: 300),
            cardView.heightAnchor.constraint(equalToConstant: 350)
        ])
    }

    @objc private func doneButtonTapped() {
        DispatchQueue.main.async { [weak self] in
            guard let self = self else { return }

            print("Selected Date:", self.datePicker.date)

            let dateFormatter = DateFormatter()
            dateFormatter.dateFormat = "yyyy-MM-dd"
            let formattedDate = dateFormatter.string(from: self.datePicker.date)
            self.resolve?(formattedDate)
            self.dismiss(animated: true, completion: nil)
        }
    }

    @objc private func cancelButtonTapped() {
        DispatchQueue.main.async { [weak self] in
            guard let self = self else { return }

            self.reject?("CANCELLED", "Date picker was cancelled", nil)
            self.dismiss(animated: true, completion: nil)
        }
    }
}

@objc(DatePicker)
class DatePicker: NSObject, RCTBridgeModule {

    @objc static func moduleName() -> String {
        return "DatePicker"
    }

    @objc func openDatePicker(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        DispatchQueue.main.async { [weak self] in
            guard let self = self else { return }

            let datePickerVC = DatePickerViewController()
            datePickerVC.resolve = resolve
            datePickerVC.reject = reject

            if let rootViewController = UIApplication.shared.keyWindow?.rootViewController {
                rootViewController.present(datePickerVC, animated: true, completion: nil)
            }
        }
    }
}
